export class Motorbike {
  id!: string;
  registrationNumber!: string;
  make!: string;
  model!: string;
  engineCapacity!: number;
  fuelType!: 'petrol' | 'electric';
  passengerCapacity!: number;
  rentalRatePerDay!: number;
  availabilityStatus!: 'available' | 'rented' | 'maintenance';
}
