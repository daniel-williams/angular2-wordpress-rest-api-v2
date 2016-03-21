
export interface IBlogStore {
    isUpdating: boolean,
    date?: Date,
    error?: any,
    
    needTitles: boolean,
    postMap?: any,
    
    totalPostCount: number,
    itemsPerPage: number,
    totalPages: number,
    activePage: number,
}


export interface IBlogPost {
  id: number,
  title: string,
  slug: string,
  date: Date,
  
  needSummary: boolean,
  summary?: string,
  
  needBody: boolean,
  body?: string,
}


export interface IBlogTitle {
  id: number,
  title: string,
  slug: string,
  date: Date,
}

export interface IBlogSummary {
  id: number,
  summary: string,
  needSummary: boolean,
}

export interface IBlogBody {
  id: number,
  body: string,
  needBody: boolean,
}
