'use strict';
const countryController = require('../../src/controllers/countryController');
const mockCountries = [
  {
    'topLevelDomain': ['.bm'],
    'callingCodes': ['1441'],
    'altSpellings': ['BM', 'The Islands of Bermuda', 'The Bermudas', 'Somers Isles'],
    'latlng': [32.33333333, -64.75],
    'timezones': ['UTC-04:00'],
    'borders': [],
    '_id': '60cdc123f42e004854b480cc',
    'name': 'Bermudass',
    'alpha2Code': 'BM',
    'alpha3Code': 'BMU',
    'capital': 'Hamilton',
    'region': 'Americas',
    'subregion': 'Northern America',
    'population': 61954,
    'demonym': 'Bermudian',
    'area': 54,
    'gini': null,
    'nativeName': 'Bermuda',
    'numericCode': '060',
    'currencies': [{ '_id': '60cf5a102766b44b04413e12', 'code': 'BMD', 'name': 'Bermudian dollar', 'symbol': '$' }],
    'languages': [{ '_id': '60cdc123f42e004854b480ce', 'iso639_1': 'en', 'iso639_2': 'eng', 'name': 'English', 'nativeName': 'English' }],
    'translations': {
      '_id': '60cdc123f42e004854b480cf',
      'de': 'Bermuda',
      'es': 'Bermudas',
      'fr': 'Bermudes',
      'ja': 'バミューダ',
      'it': 'Bermuda',
      'br': 'Bermudas',
      'pt': 'Bermudas',
      'nl': 'Bermuda',
      'hr': 'Bermudi',
      'fa': 'برمودا',
    },
    'flag': 'https://restcountries.eu/data/bmu.svg',
    'regionalBlocs': [],
    'cioc': 'BER',
    '__v': 0,
  }, {
    'topLevelDomain': ['.af'],
    'callingCodes': ['93'],
    'altSpellings': ['AF', 'Afġānistān'],
    'latlng': [33, 65],
    'timezones': ['UTC+04:30'],
    'borders': ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
    '_id': '60cdc123f42e004854b480c0',
    'name': 'Afghanistan',
    'alpha2Code': 'AF',
    'alpha3Code': 'AFG',
    'capital': 'Kabul',
    'region': 'Asia',
    'subregion': 'Southern Asia',
    'population': 27657145,
    'demonym': 'Afghan',
    'area': 652230,
    'gini': 27.8,
    'nativeName': 'افغانستان',
    'numericCode': '004',
    'currencies': [{ '_id': '60e07ccba5bdfa04e8260f4e', 'code': 'AFN', 'name': 'Afghan afghani', 'symbol': '؋' }],
    'languages': [{ '_id': '60cdc123f42e004854b480c2', 'iso639_1': 'ps', 'iso639_2': 'pus', 'name': 'Pashto', 'nativeName': 'پښتو' }, {
      '_id': '60cdc123f42e004854b480c3',
      'iso639_1': 'uz',
      'iso639_2': 'uzb',
      'name': 'Uzbek',
      'nativeName': 'Oʻzbek',
    }, { '_id': '60cdc123f42e004854b480c4', 'iso639_1': 'tk', 'iso639_2': 'tuk', 'name': 'Turkmen', 'nativeName': 'Türkmen' }],
    'translations': {
      '_id': '60cdc123f42e004854b480c5',
      'de': 'Afghanistan',
      'es': 'Afganistán',
      'fr': 'Afghanistan',
      'ja': 'アフガニスタン',
      'it': 'Afghanistan',
      'br': 'Afeganistão',
      'pt': 'Afeganistão',
      'nl': 'Afghanistan',
      'hr': 'Afganistan',
      'fa': 'افغانستان',
    },
    'flag': 'https://restcountries.eu/data/afg.svg',
    'regionalBlocs': [{ 'otherAcronyms': [], 'otherNames': [], '_id': '60cdc123f42e004854b480c6', 'acronym': 'SAARC', 'name': 'South Asian Association for Regional Cooperation' }],
    'cioc': 'AFG',
    '__v': 0,
  }, {
    'topLevelDomain': ['.bt'],
    'callingCodes': ['975'],
    'altSpellings': ['BT', 'Kingdom of Bhutan'],
    'latlng': [27.5, 90.5],
    'timezones': ['UTC+06:00'],
    'borders': ['CHN', 'IND'],
    '_id': '60cdc123f42e004854b480d0',
    'name': 'Bhutan',
    'alpha2Code': 'BT',
    'alpha3Code': 'BTN',
    'capital': 'Thimphu',
    'region': 'Asia',
    'subregion': 'Southern Asia',
    'population': 775620,
    'demonym': 'Bhutanese',
    'area': 38394,
    'gini': 38.1,
    'nativeName': 'ʼbrug-yul',
    'numericCode': '064',
    'currencies': [{ '_id': '60cdc123f42e004854b480d1', 'code': 'BTN', 'name': 'Bhutanese ngultrum', 'symbol': 'Nu.' }, {
      '_id': '60cdc123f42e004854b480d2',
      'code': 'INR',
      'name': 'Indian rupee',
      'symbol': '₹',
    }],
    'languages': [{ '_id': '60cdc123f42e004854b480d3', 'iso639_1': 'dz', 'iso639_2': 'dzo', 'name': 'Dzongkha', 'nativeName': 'རྫོང་ཁ' }],
    'translations': {
      '_id': '60cdc123f42e004854b480d4',
      'de': 'Bhutan',
      'es': 'Bután',
      'fr': 'Bhoutan',
      'ja': 'ブータン',
      'it': 'Bhutan',
      'br': 'Butão',
      'pt': 'Butão',
      'nl': 'Bhutan',
      'hr': 'Butan',
      'fa': 'بوتان',
    },
    'flag': 'https://restcountries.eu/data/btn.svg',
    'regionalBlocs': [{ 'otherAcronyms': [], 'otherNames': [], '_id': '60cdc123f42e004854b480d5', 'acronym': 'SAARC', 'name': 'South Asian Association for Regional Cooperation' }],
    'cioc': 'BHU',
    '__v': 0,
  }, {
    'topLevelDomain': ['.bv'],
    'callingCodes': [''],
    'altSpellings': ['BV', 'Bouvetøya', 'Bouvet-øya'],
    'latlng': [-54.43333333, 3.4],
    'timezones': ['UTC+01:00'],
    'borders': [],
    '_id': '60cdc123f42e004854b480ee',
    'name': 'Bouvet Island',
    'alpha2Code': 'BV',
    'alpha3Code': 'BVT',
    'capital': '',
    'region': '',
    'subregion': '',
    'population': 0,
    'demonym': '',
    'area': 49,
    'gini': null,
    'nativeName': 'Bouvetøya',
    'numericCode': '074',
    'currencies': [{ '_id': '60cdc123f42e004854b480ef', 'code': 'NOK', 'name': 'Norwegian krone', 'symbol': 'kr' }],
    'languages': [{ '_id': '60cdc123f42e004854b480f0', 'iso639_1': 'no', 'iso639_2': 'nor', 'name': 'Norwegian', 'nativeName': 'Norsk' }, {
      '_id': '60cdc123f42e004854b480f1',
      'iso639_1': 'nb',
      'iso639_2': 'nob',
      'name': 'Norwegian Bokmål',
      'nativeName': 'Norsk bokmål',
    }, { '_id': '60cdc123f42e004854b480f2', 'iso639_1': 'nn', 'iso639_2': 'nno', 'name': 'Norwegian Nynorsk', 'nativeName': 'Norsk nynorsk' }],
    'translations': {
      '_id': '60cdc123f42e004854b480f3',
      'de': 'Bouvetinsel',
      'es': 'Isla Bouvet',
      'fr': 'Île Bouvet',
      'ja': 'ブーベ島',
      'it': 'Isola Bouvet',
      'br': 'Ilha Bouvet',
      'pt': 'Ilha Bouvet',
      'nl': 'Bouveteiland',
      'hr': 'Otok Bouvet',
      'fa': 'جزیره بووه',
    },
    'flag': 'https://restcountries.eu/data/bvt.svg',
    'regionalBlocs': [],
    'cioc': '',
    '__v': 0,
  },
];

const Country = require('../../src/models/Country');

describe('Country controller tests', (object, method) => {
  const oneCountryMock = {
    'topLevelDomain': ['.bm'],
    'callingCodes': ['1441'],
    'altSpellings': ['BM', 'The Islands of Bermuda', 'The Bermudas', 'Somers Isles'],
    'latlng': [32.33333333, -64.75],
    'timezones': ['UTC-04:00'],
    'borders': [],
    '_id': '60cdc123f42e004854b480cc',
    'name': 'Bermudass',
    'alpha2Code': 'BM',
    'alpha3Code': 'BMU',
    'capital': 'Hamilton',
    'region': 'Americas',
    'subregion': 'Northern America',
    'population': 61954,
    'demonym': 'Bermudian',
    'area': 54,
    'gini': null,
    'nativeName': 'Bermuda',
    'numericCode': '060',
    'currencies': [{ '_id': '60cf5a102766b44b04413e12', 'code': 'BMD', 'name': 'Bermudian dollar', 'symbol': '$' }],
    'languages': [{ '_id': '60cdc123f42e004854b480ce', 'iso639_1': 'en', 'iso639_2': 'eng', 'name': 'English', 'nativeName': 'English' }],
    'translations': {
      '_id': '60cdc123f42e004854b480cf',
      'de': 'Bermuda',
      'es': 'Bermudas',
      'fr': 'Bermudes',
      'ja': 'バミューダ',
      'it': 'Bermuda',
      'br': 'Bermudas',
      'pt': 'Bermudas',
      'nl': 'Bermuda',
      'hr': 'Bermudi',
      'fa': 'برمودا',
    },
    'flag': 'https://restcountries.eu/data/bmu.svg',
    'regionalBlocs': [],
    'cioc': 'BER',
    '__v': 0,
  };
  const spyCountryFind = jest.spyOn(Country, 'find')
  const spyCountrySave = jest.spyOn(Country.prototype, 'save')


  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('should return all countries', async () => {
    spyCountryFind.mockReturnValue(mockCountries)
    const countries = await countryController.getCountries();
    expect(countries.length).toBe(4);
    expect(countries[0].name).toBe('Bermudass');
  });

  it('should throw error if there is a problem returning countries', () => {
    spyCountryFind.mockReturnValue(Promise.reject(Error('some error')));
    return expect(countryController.getCountries()).rejects.toThrow('some error');
  });

  it('should return country by name', async () => {
    spyCountryFind.mockReturnValue(oneCountryMock);
    const country = await countryController.getCountryByName({ name: 'Bermudass' });
    expect(country.name).toBe('Bermudass');
  });

  it('should throw error if there is a problem returning country by name', async () => {
    spyCountryFind.mockReturnValue(Promise.reject(Error('error returning country by name')));
    return expect(countryController.getCountryByName({ name: 'Bermudass' })).rejects.toThrow('error returning country by name');
  });

  it('should return countries by name', async () => {
    spyCountryFind.mockReturnValue([oneCountryMock]);
    const countries = await countryController.getCountriesByName({ name: 'Bermudass' });
    expect(countries.length).toBe(1);
  });

  it('should throw error if there is a problem returning countries by name', async () => {
    spyCountryFind.mockReturnValue(Promise.reject(Error('error returning countries by name')));
    return expect(countryController.getCountriesByName({ name: 'Bermudass' })).rejects.toThrow('error returning countries by name');
  });

  it('should create a country', async () => {
    const madeUpCountry = {
      name: 'someCountry',
      currencies: [
        {
          code: 'MU',
          name: 'nonexistent currency',
          symbol: '%',
        },
      ],
      population: 1,
    };
    spyCountrySave.mockReturnValue(madeUpCountry);
    const country = await countryController.addCountry(madeUpCountry);
    expect(country.name).toBe('someCountry');
    expect(country.currencies.length).toBe(1);
    expect(country.population).toBe(1);
    expect(spyCountrySave).toBeCalled()
    expect(spyCountrySave).toBeCalledTimes(1)
  });

  it('should throw error if there is a problem while creating a new country', async () => {
    const madeUpCountry = {
      name: 'someCountry',
      currencies: [
        {
          code: 'MU',
          name: 'nonexistent currency',
          symbol: '%',
        },
      ],
      population: 1,
    };
    spyCountrySave.mockReturnValue(Promise.reject(new Error('timeout database')));
    return expect(countryController.addCountry(madeUpCountry)).rejects.toThrow('timeout database');
  });

});
