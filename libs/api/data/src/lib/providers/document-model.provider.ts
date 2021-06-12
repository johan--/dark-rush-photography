import { Injectable } from '@nestjs/common';

import { About, BestOf, Image } from '@dark-rush-photography/shared-types';
import { DocumentModel } from '../schema/document.schema';

@Injectable()
export class DocumentModelProvider {
  toAbout(documentModel: DocumentModel): About {
    return {
      id: documentModel._id,
      slug: documentModel.slug,
      images: documentModel.images.map((image) => this.toImage(image)),
      videos: documentModel.videos,
    } as About;
  }

  toBestOf(documentModel: DocumentModel): BestOf {
    return {
      id: documentModel._id,
      slug: documentModel.slug,
      images: documentModel.images.map((image) => this.toImage(image)),
    } as BestOf;
  }

  toImage(image: Image): Image {
    return {
      entityId: image.entityId,
      slug: image.slug,
      state: image.state,
      order: image.order,
      isStared: image.isStared,
      isLoved: image.isLoved,
      isLiked: image.isLiked,
      title: image.title,
      description: image.description,
      keywords: image.keywords,
      dateCreated: image.dateCreated,
      datePublished: image.datePublished,
      dimensions: image.dimensions,
      emotions: image.emotions,
      comments: image.comments,
    };
  }
}
