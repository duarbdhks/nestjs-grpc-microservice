export interface Id {
  id: string
}

export interface name {
  name: string
}

export interface Query {
  attributes?: Array<string>
  where?: string
  order?: string
  offset?: number
  limit?: number
}

export interface Count {
  count: number
}
