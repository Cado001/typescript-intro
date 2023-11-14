export interface IBird {
    wings: number
    noctural: boolean
    family: string[]
    files: boolean
}

export interface IKillerBirds extends IBird{
    edible: boolean
    hasKilled: IHasKilled[]
    phoneNumber: number
}

export interface IHasKilled {
    type: string
    weight: number
    color: string
}