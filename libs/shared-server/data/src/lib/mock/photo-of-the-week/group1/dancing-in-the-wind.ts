import {
  PhotoOfTheWeek,
  DocumentType,
  Month,
} from '@dark-rush-photography/shared-types';

export class DancingInTheWind implements PhotoOfTheWeek {
  id = '';
  type: DocumentType = 'PhotoOfTheWeek';
  slug = 'dancing-in-the-wind';
  group = 1;
  title = 'Dancing in the Wind!';
  description = `Join us, we're dancing in the wind!`;
  keywords = [
    'United States',
    'Proud',
    'American',
    'Flag',
    'Wind',
    'Blue Sky',
    'Puffy Clouds',
  ];
  datePublished = { month: Month.May, day: 26, year: 2019 };
  location = { country: 'United States' };
  useTitleImage = false;
  text = [];
  images = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static of(): PhotoOfTheWeek {
    return new DancingInTheWind();
  }
}
