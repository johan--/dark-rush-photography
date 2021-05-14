import sharp = require('sharp');

export const getImageDimension = (
  imageFilePath: string
): Promise<{ width: number; height: number }> =>
  sharp(imageFilePath)
    .metadata()
    .then(({ width, height }) => {
      if (!width) throw new Error('Width was not found');
      if (!height) throw new Error('Height was not found');
      return { width, height };
    });
