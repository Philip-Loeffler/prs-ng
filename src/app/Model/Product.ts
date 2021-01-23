import { Vendor } from 'src/app/Model/Vendor';

export class Product {
  id: number;
  vendor: Vendor;
  partNumber: string;
  name: string;
  price: number;
  unit: string;
  photoPath: string;

  constructor(
    id = 0,
    vendor: Vendor,
    partNumber: '',
    name: '',
    price = 0,
    unit: '',
    photoPath: ''
  ) {
    this.id = id;
    this.vendor = vendor;
    this.partNumber = partNumber;
    this.name = name;
    this.price = price;
    this.unit = unit;
    this.photoPath = photoPath;
  }
}
