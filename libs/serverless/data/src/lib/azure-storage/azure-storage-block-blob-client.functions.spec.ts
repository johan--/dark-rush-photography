import { Subscription } from 'rxjs';

import {
  AzureStorageContainerType,
  AZURE_STORAGE_CONNECTION_STRING_DEV,
} from '@dark-rush-photography/shared-server/types';
import { getAzureStorageBlockBlobClient$ } from './azure-storage-block-blob-client.functions';

describe('blockBlobClient$', () => {
  let blockBlobClientSubscription: Subscription | undefined;

  it('should provide a block blob client for the private container', () => {
    blockBlobClientSubscription = getAzureStorageBlockBlobClient$(
      AZURE_STORAGE_CONNECTION_STRING_DEV,
      AzureStorageContainerType.Private,
      'uploaded-image'
    ).subscribe((blockBlobClient) => {
      expect(blockBlobClient).toBeDefined();
    });
  });

  it('should provide a block blob client for the public container', () => {
    blockBlobClientSubscription = getAzureStorageBlockBlobClient$(
      AZURE_STORAGE_CONNECTION_STRING_DEV,
      AzureStorageContainerType.Public,
      'uploaded-image'
    ).subscribe((blockBlobClient) => {
      expect(blockBlobClient).toBeDefined();
    });
  });

  afterEach(() => {
    if (blockBlobClientSubscription) {
      blockBlobClientSubscription.unsubscribe();
    }
  });
});
