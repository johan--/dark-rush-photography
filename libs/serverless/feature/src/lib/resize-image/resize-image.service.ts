import { Injectable, Inject, HttpService } from '@nestjs/common';

import { take } from 'rxjs/operators';

import { ENV, ImageDimensionState } from '@dark-rush-photography/shared-types';
import { Env, ImageActivity } from '@dark-rush-photography/serverless/types';
import { ResizeImageActivityProvider } from '@dark-rush-photography/serverless/data';

@Injectable()
export class ResizeImageService {
  constructor(
    @Inject(ENV) private readonly env: Env,
    private readonly httpService: HttpService,
    private readonly resizeImageActivityProvider: ResizeImageActivityProvider
  ) {}

  async resizeImage(imageActivity: ImageActivity): Promise<ImageActivity> {
    return this.resizeImageActivityProvider
      .process$(this.env, this.httpService, imageActivity)
      .pipe(take(1))
      .toPromise()
      .then(() => ({
        state: ImageDimensionState.Resized,
        publishedImage: imageActivity.publishedImage,
      }));
  }
}
