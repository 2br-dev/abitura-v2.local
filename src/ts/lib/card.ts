export interface IEducationForm{
	name: string,
	duration: number,
	vacations: {
		free: {
			total: number,
			main?: number,
			target?: number,
			particular?: number,
			special?: number
		},
		paid: {
			total: number,
			main?: number,
			foreign?: number
		}
	}
}

export interface IRequirement{
	name:string,
	min: number,
	classname: string
}

export interface IEducationLevel{
	name: string,
	code: string,
	forms: Array<IEducationForm>
}

export interface ICardData{
	id?: number,
	faculty: string,
	profile?: string,
	speciality?: string,
	education_levels?: Array<IEducationLevel>,
	requirements?: Array<IRequirement>,
	price?: number
}

export interface IData{
	elements:Array<ICardData>
}