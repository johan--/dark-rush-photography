import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  Document,
  DocumentModelProvider,
  DocumentSchema,
} from '@dark-rush-photography/api/data';
import { AdminImageDimensionsController } from './admin-image-dimensions.controller';
import { AdminImageDimensionsService } from './admin-image-dimensions.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Document.name, schema: DocumentSchema },
    ]),
  ],
  controllers: [AdminImageDimensionsController],
  providers: [DocumentModelProvider, AdminImageDimensionsService],
})
export class AdminImageDimensionsModule {}
