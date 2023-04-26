export const dragOverHandler = (ev: any) => {
  ev.preventDefault();
  ev.stopPropagation();
};

export const onInputClick = (
  event: React.MouseEvent<HTMLInputElement, MouseEvent>
) => {
  //this function is for clean target when the user want to upload the same file
  const element = event.target as HTMLInputElement;
  element.value = "";
};
