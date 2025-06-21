interface IMovieSectionData {
  code: number;
  facets: string | null;
  message: string;
  request_id: string;
  seoDescription: string | null;
  showAll: string;
  status: string;
  tags: string | null;
  title: string;
  results: IMovieInfoData[];
}

interface IMovieInfoData {
  startDate: string;
  globalServiceId: null;
  _id: string;
  endDate: string;
  promotionInfo: null;
  title: string;
  globalServiceName: string;
  relatedCast: {
    values: {
      images: {
        values: {
          profile: string;
          type: string;
          resolution: string;
          link: string;
        }[];
      };
      types: string[];
      _id: string;
      name: string;
      roles: never[];
    }[];
  };
  publishingHouse: {
    userName: string;
    publishingHouseId: number;
    userId: number;
    publishingHouseName: string;
  };
  releaseDate: string;
  altTitle: never[];
  programId: string;
  _expiresAt: string;
  _lastModifiedAt: string;
  generalInfo: {
    displayTitle: string;
    contentPlayDuration: null;
    altTitle: never[];
    showDisplayTabs: {};
    actionType: null;
    seoH5Tag: null;
    briefDescription: string;
    ssaiEnabled: string;
    seoDescription: null;
    alterDescription: null;
    isDownloadable: boolean;
    seoH6Tag: null;
    category: string;
    isDolby: boolean;
    title: string;
    isAtmos: boolean;
    isDolbyvision: boolean;
    altGenre: null;
    isHdr10plus: boolean;
    showWatermark: boolean;
    altDisplayTitle: string;
    tagLine: string;
    altDescription: null;
    type: string;
    accessControl: string;
    seoH1Tag: null;
    description: string;
    seoH4Tag: null;
    previousContent: string;
    isHdr: boolean;
    deepLinkiOS: string;
    _id: string;
    seoH3Tag: null;
    isDvr: boolean;
    alternateRelatedTitle: never[];
    seoTitle: null;
    actionURL: null;
    nextContent: string;
    contentRule: {
      rule: {
        duration: number;
        rulesConditions: {
          values: string[];
          name: string;
          condition: string;
        }[];
        name: string;
        rulesProperties: {
          values: string[];
          name: string;
        }[];
      }[];
    };
    videoAvailable: boolean;
    preferredCdn: null;
    isAzure: boolean;
    contentRights: never[];
    relatedTitle: string;
    isHdr10: boolean;
    restrictedCountries: null;
    isSellable: boolean;
    equivalentChannelId: string;
    altLanguage: null;
    akamaiTag: string;
    altBriefDescription: null;
    partnerId: null;
    deepLink: string;
    seoH2Tag: null;
  };
  images: {
    values: {
      profile: string;
      type: string;
      resolution: string;
      link: string;
    }[];
  };
  content: {
    videoQuality: string;
    parentIds: null;
    drmType: string;
    releaseDate: string;
    genre: {
      id: string;
      name: string;
    }[];
    actionType: null;
    duration: string;
    is3d: boolean;
    siblingOrder: number;
    serialNo: null;
    isDolbyvision: boolean;
    contentRating: string;
    drmEnabled: boolean;
    showWatermark: boolean;
    isChromeCastEnabled: boolean;
    categoryName: string;
    isDolby: boolean;
    isHdr: boolean;
    language: string[];
    certifiedRatings: {
      values: (
        | {
            rating: string;
            country: null;
            description: null;
            name: string;
            title: null;
          }
        | {
            rating: string;
            country: string;
            description: string;
            name: string;
            title: string;
          }
      )[];
    };
    actionURL: null;
    isMpegDash: boolean;
    isAzure: boolean;
    adEnabled: boolean;
    isHdr10plus: boolean;
    isHdr10: boolean;
    isAtmos: boolean;
    categoryType: string;
  };
  altGlobalServiceName: string;
}
