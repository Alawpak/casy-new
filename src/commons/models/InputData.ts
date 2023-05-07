export interface InputData {
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
