export interface IMotorVehicle {
  vehicleId: string;
  registrationNumber: string;
  vin: string;

  vehicleType?: 'Car' | 'Van' | 'Truck' | 'Bus' | 'Motorbike';
  make?: string;
  model?: string;
  manufactureYear?: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';

  seatingCapacity?: number;
  payloadCapacityKg?: number;

  assignedDriverId?: string;
  availabilityStatus?: 'Available' | 'InUse' | 'Maintenance';

  currentMileage?: number;
  insuranceExpiryDate?: Date;

  createdAt: Date;
  updatedAt: Date;
}
