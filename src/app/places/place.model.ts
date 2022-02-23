export class Place
{

  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  availableFrom: Date;
  availableTo: Date;
  constructor(id: string,title: string, description: string,imageUrl: string, price: number, availableFrom: Date, availableTo: Date)
  {
    this.id =id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.availableFrom = availableFrom;
    this.availableTo = availableTo;
  }
}

