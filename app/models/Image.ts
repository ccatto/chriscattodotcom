// #todo gotta rename to better naming convention that imageClass I don't like the Class suffix
export class ImageClass {
  URL: string;
  alt: string;
  // imageName: string;

  constructor(
    // imageName: string,
    URL: string,
    alt: string,
  ) {
    // this.imageName = imageName;
    this.URL = URL;
    this.alt = alt;
  }
}
