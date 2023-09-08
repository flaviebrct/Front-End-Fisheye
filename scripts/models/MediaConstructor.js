export class Media {
  constructor(data) {
    this._data = data;
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._likes = data.likes;
    this._date = data.date;
    this._price = data.price;
  }

  get id() {
    return this._id;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get mediaLink() {
    const { image, video } = this._data;

    return `assets/photographers/${this._photographerId}/${image || video}`;
  }

  get mediaType() {
    const { image, video } = this._data;

    return (image && "image") || (video && "video") || undefined;
  }

  get likes() {
    return this._likes;
  }

  get date() {
    return this._date;
  }

  get price() {
    return this._price;
  }
}