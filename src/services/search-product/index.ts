import axios from "axios";

interface InputData {
  _type: string;
  instrumentation: {
    _type: string;
  };
  tags: {
    displayName: string;
    actions: {
      _type: string;
      actionType: string;
      data: {
        value: {
          webSearchUrl: string;
          name: string;
          thumbnailUrl: string;
          datePublished: string;
          isFamilyFriendly: boolean;
          contentUrl: string;
          hostPageUrl: string;
          contentSize: string;
          encodingFormat: string;
          hostPageDisplayUrl: string;
          width: number;
          height: number;
          hostPageDiscoveredDate: string;
          thumbnail: {
            width: number;
            height: number;
          };
          imageInsightsToken: string;
          insightsMetadata: {
            pagesIncludingCount: number;
            availableSizesCount: number;
          };
          imageId: string;
          accentColor: string;
        }[];
      };
    }[];
  }[];
}

const extraerSepararPalabras = (inputString: string): string => {
  const input: InputData = JSON.parse(inputString);
  const names: string[] = [];

  input.tags.forEach((tag) => {
    tag.actions.forEach((action) => {
      if (action.data && action.data.value) {
        action.data.value.forEach((value) => {
          names.push(value.name);
        });
      }
    });
  });

  const cNames = names.join(" ");
  const entrada = cNames.replace(/[^a-zA-Z\s]/g, " ");
  const palabras = entrada.split(/\s+/);
  return palabras.join(", ");
};

function filtrarPalabras(input: string, palabras1: string[], palabras2: string[] = []): string {
  const palabras = input.split(",");

  const palabrasFiltradas = palabras.filter((palabra) => {
    return palabras1.includes(palabra.trim()) || palabras2.includes(palabra.trim());
  });
  return palabrasFiltradas.join(", ");
}

function eliminarPalabrasRepetidas(input: string): string {
  const palabras = input.split(",")
  const contador: {[palabra: string]: number} = {};

  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i].trim();
    if (palabra.length > 0) {
      if (palabra in contador) {
        contador[palabra]++;
      } else {
        contador[palabra] = 1;
      }
    }
  }

  const palabrasOrdenadas = Object.keys(contador).sort((a, b) => contador[b] - contador[a]);
  const palabrasRepetidas = palabrasOrdenadas.slice(0, 3);
  return palabrasRepetidas.join(", ");
}

const colors = ["Amaranth", "Rainbow","Amber", "Apricot", "Aquamarine", "Azure", "Beige", "Black", "Blue", "Blush", "Bronze", "Brown", "Burgundy", "Byzantium", "Carmine", "Cerise", "Cerulean", "Champagne", "Charcoal", "Chartreuse green","Cherry", "Chestnut", "Chocolate", "Cinnamon", "Cobalt blue", "Coffee", "Copper", "Coral", "Crimson", "Cyan","Desert sand", "Electric blue", "Emerald", "Erin", "Gold", "Gray", "Green", "Harlequin", "Indigo", "Ivory","Jade", "Jungle green", "Lavender", "Lemon", "Lilac", "Lime", "Magenta", "Maroon", "Mauve", "Navy blue","Ochre", "Olive", "Orange", "Orchid", "Peach", "Pear", "Periwinkle", "Persimmon", "Pink", "Plum", "Powder blue",  "Purple", "Raspberry", "Red", "Rose", "Ruby", "Salmon", "Sangria", "Sapphire", "Scarlet", "Silver", "Slate gray",  "Spring bud", "Spring green", "Tan", "Taupe", "Teal", "Turquoise", "Ultramarine", "Violet", "Viridian", "White",  "Yellow"];
const clothes = ["Anorak", "Oversized", "Bandana", "Bathrobe", "Bikini", "Blazer", "Blouse", "Boots", "Bow tie", "Boxer shorts", "Bra", "Cap", "Cardigan", "Coat", "Corset", "Cufflinks", "Dress", "Earmuffs", "Espadrilles", "Gloves", "Goggles", "Gown", "Halterneck", "Hat", "Headband", "High heels", "Hoodie", "Jacket", "Jeans", "Jumper", "Kaftan", "Kilt", "Kimono", "Knickers", "Leggings", "Lingerie", "Loafers", "Mittens", "Mules", "Neckerchief", "Nightgown", "Overalls", "Overcoat", "Pajamas", "Pants", "Parka", "Pashmina", "Peacoat", "Polo shirt", "Poncho", "Pyjamas", "Raincoat", "Robe", "Romper suit", "Sandals", "Sari", "Sarong", "Scarf", "Shawl", "Shirt", "Shoes", "Shorts", "Skirt", "Slacks", "Slippers", "Sneakers", "Socks", "Stockings", "Suit", "Sunglasses", "Sweater", "Sweatpants", "Sweatshirt", "Swimsuit", "T-shirt", "Tank top", "Tights", "Top", "Tracksuit", "Trousers", "Turtleneck", "Undergarment", "Underpants", "Undershirt", "Vest", "Waistcoat", "Wetsuit", "Windbreaker", "Wrap", "Yukata"];

export const postImage = (data: FormData) => {
  let request = new XMLHttpRequest();
  const baseUri = "https://api.bing.microsoft.com/v7.0/images/visualsearch";

  request.open("POST", baseUri);

  request.send(data);

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const palabrasExtraidos = (extraerSepararPalabras(this.responseText));
      const palabrasFiltrados = (filtrarPalabras(palabrasExtraidos, colors, clothes));
      const tagsFinal = (eliminarPalabrasRepetidas(palabrasFiltrados));
      console.log(tagsFinal);
    }
  };
};
