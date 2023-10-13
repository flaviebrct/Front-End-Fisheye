import { Media } from "../models/MediaConstructor.js";

export class MediaFactory {
  data = Media;

  constructor(data, mediaWithCrontrols) {
    const { mediaType: type, title, mediaLink: url } = data;

    try {
      switch (type) {
        case "image":
          this.media = document.createElement("img");
          break;

        case "video":
          this.media = document.createElement("video");
          this.media.controls = mediaWithCrontrols;
          break;
        default:
          throw new Error("Le type saisie n'existe pas");
      }
    } catch (err) {
      console.log(err);
    }

    this.media.src = url;
    this.media.classList.value = "media";
    this.media.alt = `${type} intitulé '${title}'`;
    this.media.ariaLabel = `${type} intitulé '${title}'`;
  }

  createMediaComponent() {
    return this.media;
  }
}
