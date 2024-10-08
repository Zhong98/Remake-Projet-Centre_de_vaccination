export class Card {
  public src: string;
  public imgSrc: string;
  public title: string;
  public text: string;
  public reveal: boolean = false;

  constructor(src: string, imgSrc: string, title: string, text: string) {
    this.src = src;
    this.imgSrc = imgSrc;
    this.title = title;
    this.text = text;
  }
}
