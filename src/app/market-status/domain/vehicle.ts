export interface VehicleStatistics {
  logo: string,
  picture: string,
  fuelType: string,
  areas: { name: string, number: string }[]
}

export interface VehicleProgress {
  make: string, 
  progress: number,
  picture: string,
  isTop: boolean
}