const citys = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 16093,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: 'US',
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: 'Mountain View',
  cod: 200,
}

export type CitysWeather = typeof citys

const daily = [
  {
    dt: 1632560400,
    sunrise: 1632540345,
    sunset: 1632583656,
    moonrise: 1632590280,
    moonset: 1632556920,
    moon_phase: 0.64,
    temp: {
      day: 10.99,
      min: 8.76,
      max: 13.53,
      night: 11.76,
      eve: 13.1,
      morn: 9.31
    },
    feels_like: {
      day: 10.29,
      night: 11.11,
      eve: 12.16,
      morn: 8.7
    },
    pressure: 1008,
    humidity: 82,
    dew_point: 8.04,
    wind_speed: 5.26,
    wind_deg: 290,
    wind_gust: 9.71,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'облачно с прояснениями',
        icon: '04d'
      }
    ],
    clouds: 75,
    pop: 0.36,
    uvi: 2.3
  },
  {
    dt: 1632646800,
    sunrise: 1632626835,
    sunset: 1632669923,
    moonrise: 1632678180,
    moonset: 1632647400,
    moon_phase: 0.67,
    temp: {
      day: 13.27,
      min: 10.02,
      max: 15.23,
      night: 10.02,
      eve: 11.91,
      morn: 12.49
    },
    feels_like: {
      day: 12.48,
      night: 9.04,
      eve: 10.83,
      morn: 12.12
    },
    pressure: 1013,
    humidity: 70,
    dew_point: 7.96,
    wind_speed: 7.07,
    wind_deg: 314,
    wind_gust: 12.6,
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'небольшой дождь',
        icon: '10d'
      }
    ],
    clouds: 49,
    pop: 0.32,
    rain: 0.45,
    uvi: 1.67
  },
  {
    dt: 1632733200,
    sunrise: 1632713325,
    sunset: 1632756190,
    moonrise: 1632766500,
    moonset: 1632737820,
    moon_phase: 0.7,
    temp: {
      day: 11.85,
      min: 7.12,
      max: 14.33,
      night: 9.77,
      eve: 12.83,
      morn: 7.12
    },
    feels_like: {
      day: 10.81,
      night: 8.16,
      eve: 11.87,
      morn: 4.31
    },
    pressure: 1019,
    humidity: 66,
    dew_point: 5.85,
    wind_speed: 5.06,
    wind_deg: 8,
    wind_gust: 10.53,
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'небольшой дождь',
        icon: '10d'
      }
    ],
    clouds: 100,
    pop: 0.36,
    rain: 0.13,
    uvi: 2.21
  },
  {
    dt: 1632819600,
    sunrise: 1632799816,
    sunset: 1632842458,
    moonrise: 1632855300,
    moonset: 1632827880,
    moon_phase: 0.73,
    temp: {
      day: 12.42,
      min: 8.32,
      max: 13.36,
      night: 10.61,
      eve: 11.55,
      morn: 8.38
    },
    feels_like: {
      day: 11.31,
      night: 9.58,
      eve: 10.51,
      morn: 6.98
    },
    pressure: 1026,
    humidity: 61,
    dew_point: 5.24,
    wind_speed: 4.12,
    wind_deg: 42,
    wind_gust: 7.3,
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'небольшой дождь',
        icon: '10d'
      }
    ],
    clouds: 100,
    pop: 0.2,
    rain: 0.31,
    uvi: 1.17
  },
  {
    dt: 1632906000,
    sunrise: 1632886306,
    sunset: 1632928726,
    moonrise: 1632944760,
    moonset: 1632917580,
    moon_phase: 0.75,
    temp: {
      day: 10.66,
      min: 6.53,
      max: 12.85,
      night: 9.22,
      eve: 11.86,
      morn: 6.53
    },
    feels_like: {
      day: 9.48,
      night: 7.81,
      eve: 10.35,
      morn: 4.29
    },
    pressure: 1032,
    humidity: 65,
    dew_point: 4.45,
    wind_speed: 4.08,
    wind_deg: 63,
    wind_gust: 7.03,
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'небольшой дождь',
        icon: '10d'
      }
    ],
    clouds: 98,
    pop: 0.2,
    rain: 0.13,
    uvi: 2.61
  },
  {
    dt: 1632992400,
    sunrise: 1632972797,
    sunset: 1633014994,
    moonrise: 1633034880,
    moonset: 1633006680,
    moon_phase: 0.79,
    temp: {
      day: 12.39,
      min: 5.74,
      max: 14.22,
      night: 10.01,
      eve: 12.58,
      morn: 5.74
    },
    feels_like: {
      day: 10.57,
      night: 8.16,
      eve: 10.81,
      morn: 3.66
    },
    pressure: 1034,
    humidity: 34,
    dew_point: -2.76,
    wind_speed: 3.92,
    wind_deg: 92,
    wind_gust: 8.12,
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'небольшая облачность',
        icon: '02d'
      }
    ],
    clouds: 14,
    pop: 0,
    uvi: 3
  },
  {
    dt: 1633078800,
    sunrise: 1633059288,
    sunset: 1633101262,
    moonrise: 0,
    moonset: 1633095300,
    moon_phase: 0.82,
    temp: {
      day: 13.27,
      min: 6.39,
      max: 14.94,
      night: 10.63,
      eve: 12.9,
      morn: 6.39
    },
    feels_like: {
      day: 11.44,
      night: 8.69,
      eve: 11.03,
      morn: 4.39
    },
    pressure: 1029,
    humidity: 30,
    dew_point: -3.96,
    wind_speed: 4.24,
    wind_deg: 101,
    wind_gust: 7.3,
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'переменная облачность',
        icon: '03d'
      }
    ],
    clouds: 32,
    pop: 0,
    uvi: 3
  },
  {
    dt: 1633165200,
    sunrise: 1633145780,
    sunset: 1633187531,
    moonrise: 1633125420,
    moonset: 1633183440,
    moon_phase: 0.85,
    temp: {
      day: 13.52,
      min: 7.32,
      max: 15.25,
      night: 11.38,
      eve: 13.31,
      morn: 7.32
    },
    feels_like: {
      day: 11.84,
      night: 9.59,
      eve: 11.58,
      morn: 6.6
    },
    pressure: 1025,
    humidity: 35,
    dew_point: -1.56,
    wind_speed: 2.28,
    wind_deg: 78,
    wind_gust: 5,
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'ясно',
        icon: '01d'
      }
    ],
    clouds: 6,
    pop: 0,
    uvi: 3
  }
]

export type Daily = typeof daily

const oneCall = {
  lat: 50,
  lon: 36.25,
  timezone: 'Europe/Kiev',
  timezone_offset: 10800,
  current: {
    dt: 1632559668,
    sunrise: 1632540345,
    sunset: 1632583656,
    temp: 10.99,
    feels_like: 10.29,
    pressure: 1008,
    humidity: 82,
    dew_point: 8.04,
    uvi: 1.8,
    clouds: 75,
    visibility: 10000,
    wind_speed: 3,
    wind_deg: 250,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'облачно с прояснениями',
        icon: '04d'
      }
    ]
  },
  minutely: [
    {
      dt: 1632559680,
      precipitation: 0
    },
    {
      dt: 1632559740,
      precipitation: 0
    },
    {
      dt: 1632559800,
      precipitation: 0
    },
    {
      dt: 1632559860,
      precipitation: 0
    },
    {
      dt: 1632559920,
      precipitation: 0
    },
    {
      dt: 1632559980,
      precipitation: 0
    },
    {
      dt: 1632560040,
      precipitation: 0
    },
    {
      dt: 1632560100,
      precipitation: 0
    },
    {
      dt: 1632560160,
      precipitation: 0
    },
    {
      dt: 1632560220,
      precipitation: 0
    },
    {
      dt: 1632560280,
      precipitation: 0
    },
    {
      dt: 1632560340,
      precipitation: 0
    },
    {
      dt: 1632560400,
      precipitation: 0
    },
    {
      dt: 1632560460,
      precipitation: 0
    },
    {
      dt: 1632560520,
      precipitation: 0
    },
    {
      dt: 1632560580,
      precipitation: 0
    },
    {
      dt: 1632560640,
      precipitation: 0
    },
    {
      dt: 1632560700,
      precipitation: 0
    },
    {
      dt: 1632560760,
      precipitation: 0
    },
    {
      dt: 1632560820,
      precipitation: 0
    },
    {
      dt: 1632560880,
      precipitation: 0
    },
    {
      dt: 1632560940,
      precipitation: 0
    },
    {
      dt: 1632561000,
      precipitation: 0
    },
    {
      dt: 1632561060,
      precipitation: 0
    },
    {
      dt: 1632561120,
      precipitation: 0
    },
    {
      dt: 1632561180,
      precipitation: 0
    },
    {
      dt: 1632561240,
      precipitation: 0
    },
    {
      dt: 1632561300,
      precipitation: 0
    },
    {
      dt: 1632561360,
      precipitation: 0
    },
    {
      dt: 1632561420,
      precipitation: 0
    },
    {
      dt: 1632561480,
      precipitation: 0
    },
    {
      dt: 1632561540,
      precipitation: 0
    },
    {
      dt: 1632561600,
      precipitation: 0
    },
    {
      dt: 1632561660,
      precipitation: 0
    },
    {
      dt: 1632561720,
      precipitation: 0
    },
    {
      dt: 1632561780,
      precipitation: 0
    },
    {
      dt: 1632561840,
      precipitation: 0
    },
    {
      dt: 1632561900,
      precipitation: 0
    },
    {
      dt: 1632561960,
      precipitation: 0
    },
    {
      dt: 1632562020,
      precipitation: 0
    },
    {
      dt: 1632562080,
      precipitation: 0
    },
    {
      dt: 1632562140,
      precipitation: 0
    },
    {
      dt: 1632562200,
      precipitation: 0
    },
    {
      dt: 1632562260,
      precipitation: 0
    },
    {
      dt: 1632562320,
      precipitation: 0
    },
    {
      dt: 1632562380,
      precipitation: 0
    },
    {
      dt: 1632562440,
      precipitation: 0
    },
    {
      dt: 1632562500,
      precipitation: 0
    },
    {
      dt: 1632562560,
      precipitation: 0
    },
    {
      dt: 1632562620,
      precipitation: 0
    },
    {
      dt: 1632562680,
      precipitation: 0
    },
    {
      dt: 1632562740,
      precipitation: 0
    },
    {
      dt: 1632562800,
      precipitation: 0
    },
    {
      dt: 1632562860,
      precipitation: 0
    },
    {
      dt: 1632562920,
      precipitation: 0
    },
    {
      dt: 1632562980,
      precipitation: 0
    },
    {
      dt: 1632563040,
      precipitation: 0
    },
    {
      dt: 1632563100,
      precipitation: 0
    },
    {
      dt: 1632563160,
      precipitation: 0
    },
    {
      dt: 1632563220,
      precipitation: 0
    },
    {
      dt: 1632563280,
      precipitation: 0
    }
  ],
  hourly: [
    {
      dt: 1632556800,
      temp: 10.94,
      feels_like: 10.26,
      pressure: 1008,
      humidity: 83,
      dew_point: 8.17,
      uvi: 1.47,
      clouds: 80,
      visibility: 10000,
      wind_speed: 1.97,
      wind_deg: 225,
      wind_gust: 2.6,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'облачно с прояснениями',
          icon: '04d'
        }
      ],
      pop: 0.04
    },
    {
      dt: 1632560400,
      temp: 10.99,
      feels_like: 10.29,
      pressure: 1008,
      humidity: 82,
      dew_point: 8.04,
      uvi: 1.8,
      clouds: 75,
      visibility: 10000,
      wind_speed: 4.01,
      wind_deg: 270,
      wind_gust: 5.31,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'облачно с прояснениями',
          icon: '04d'
        }
      ],
      pop: 0.24
    },
    {
      dt: 1632564000,
      temp: 11.52,
      feels_like: 10.76,
      pressure: 1008,
      humidity: 78,
      dew_point: 7.82,
      uvi: 2.3,
      clouds: 76,
      visibility: 10000,
      wind_speed: 4.57,
      wind_deg: 281,
      wind_gust: 5.7,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'облачно с прояснениями',
          icon: '04d'
        }
      ],
      pop: 0.08
    },
    {
      dt: 1632567600,
      temp: 12.39,
      feels_like: 11.51,
      pressure: 1009,
      humidity: 70,
      dew_point: 7.08,
      uvi: 1.95,
      clouds: 78,
      visibility: 10000,
      wind_speed: 4.58,
      wind_deg: 277,
      wind_gust: 6.02,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'облачно с прояснениями',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632571200,
      temp: 13,
      feels_like: 12,
      pressure: 1010,
      humidity: 63,
      dew_point: 6.13,
      uvi: 1.36,
      clouds: 82,
      visibility: 10000,
      wind_speed: 5.06,
      wind_deg: 283,
      wind_gust: 6.1,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'облачно с прояснениями',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632574800,
      temp: 13.53,
      feels_like: 12.4,
      pressure: 1010,
      humidity: 56,
      dew_point: 4.93,
      uvi: 0.56,
      clouds: 95,
      visibility: 10000,
      wind_speed: 5.26,
      wind_deg: 290,
      wind_gust: 7.41,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632578400,
      temp: 13.45,
      feels_like: 12.42,
      pressure: 1012,
      humidity: 60,
      dew_point: 5.86,
      uvi: 0.21,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.94,
      wind_deg: 283,
      wind_gust: 6.4,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632582000,
      temp: 13.1,
      feels_like: 12.16,
      pressure: 1012,
      humidity: 65,
      dew_point: 6.62,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.54,
      wind_deg: 279,
      wind_gust: 7.54,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632585600,
      temp: 12.67,
      feels_like: 11.85,
      pressure: 1013,
      humidity: 71,
      dew_point: 7.54,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.34,
      wind_deg: 267,
      wind_gust: 7.62,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632589200,
      temp: 12.26,
      feels_like: 11.5,
      pressure: 1013,
      humidity: 75,
      dew_point: 7.91,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.25,
      wind_deg: 262,
      wind_gust: 8.02,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632592800,
      temp: 11.99,
      feels_like: 11.18,
      pressure: 1013,
      humidity: 74,
      dew_point: 7.54,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.76,
      wind_deg: 251,
      wind_gust: 8.62,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632596400,
      temp: 12,
      feels_like: 11.27,
      pressure: 1013,
      humidity: 77,
      dew_point: 8.04,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.25,
      wind_deg: 256,
      wind_gust: 9.2,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632600000,
      temp: 11.76,
      feels_like: 11.11,
      pressure: 1013,
      humidity: 81,
      dew_point: 8.55,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.27,
      wind_deg: 249,
      wind_gust: 9.71,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0.2
    },
    {
      dt: 1632603600,
      temp: 11.75,
      feels_like: 11.04,
      pressure: 1012,
      humidity: 79,
      dew_point: 8.15,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.92,
      wind_deg: 247,
      wind_gust: 10.3,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0.24
    },
    {
      dt: 1632607200,
      temp: 11.47,
      feels_like: 10.74,
      pressure: 1012,
      humidity: 79,
      dew_point: 8.02,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.37,
      wind_deg: 238,
      wind_gust: 11.12,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'небольшой дождь',
          icon: '10n'
        }
      ],
      pop: 0.24,
      rain: {
        '1h': 0.19
      }
    },
    {
      dt: 1632610800,
      temp: 11.85,
      feels_like: 11.07,
      pressure: 1012,
      humidity: 76,
      dew_point: 7.76,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.15,
      wind_deg: 247,
      wind_gust: 11.54,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'небольшой дождь',
          icon: '10n'
        }
      ],
      pop: 0.32,
      rain: {
        '1h': 0.13
      }
    },
    {
      dt: 1632614400,
      temp: 12.03,
      feels_like: 11.25,
      pressure: 1011,
      humidity: 75,
      dew_point: 7.84,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.23,
      wind_deg: 247,
      wind_gust: 11.52,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0.28
    },
    {
      dt: 1632618000,
      temp: 12.18,
      feels_like: 11.52,
      pressure: 1011,
      humidity: 79,
      dew_point: 8.54,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.2,
      wind_deg: 253,
      wind_gust: 12.4,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632621600,
      temp: 12.44,
      feels_like: 11.93,
      pressure: 1011,
      humidity: 84,
      dew_point: 9.76,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.49,
      wind_deg: 261,
      wind_gust: 12.6,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'небольшой дождь',
          icon: '10n'
        }
      ],
      pop: 0.2,
      rain: {
        '1h': 0.13
      }
    },
    {
      dt: 1632625200,
      temp: 12.49,
      feels_like: 12.12,
      pressure: 1011,
      humidity: 89,
      dew_point: 10.66,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.48,
      wind_deg: 269,
      wind_gust: 11.63,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0.08
    },
    {
      dt: 1632628800,
      temp: 12.64,
      feels_like: 12.31,
      pressure: 1011,
      humidity: 90,
      dew_point: 11.06,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.25,
      wind_deg: 274,
      wind_gust: 11.32,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632632400,
      temp: 13.12,
      feels_like: 12.73,
      pressure: 1011,
      humidity: 86,
      dew_point: 10.96,
      uvi: 0.2,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.54,
      wind_deg: 282,
      wind_gust: 10.94,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632636000,
      temp: 14.38,
      feels_like: 13.86,
      pressure: 1011,
      humidity: 76,
      dew_point: 10.31,
      uvi: 0.55,
      clouds: 92,
      visibility: 10000,
      wind_speed: 5.96,
      wind_deg: 293,
      wind_gust: 10.12,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632639600,
      temp: 15.23,
      feels_like: 14.61,
      pressure: 1012,
      humidity: 69,
      dew_point: 9.53,
      uvi: 0.91,
      clouds: 8,
      visibility: 10000,
      wind_speed: 6.52,
      wind_deg: 305,
      wind_gust: 9.6,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'ясно',
          icon: '01d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632643200,
      temp: 14.85,
      feels_like: 14.14,
      pressure: 1012,
      humidity: 67,
      dew_point: 8.74,
      uvi: 1.37,
      clouds: 24,
      visibility: 10000,
      wind_speed: 7.07,
      wind_deg: 314,
      wind_gust: 9.92,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'небольшая облачность',
          icon: '02d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632646800,
      temp: 13.27,
      feels_like: 12.48,
      pressure: 1013,
      humidity: 70,
      dew_point: 7.96,
      uvi: 1.67,
      clouds: 49,
      visibility: 10000,
      wind_speed: 6.2,
      wind_deg: 307,
      wind_gust: 10.11,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'переменная облачность',
          icon: '03d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632650400,
      temp: 13.21,
      feels_like: 12.28,
      pressure: 1013,
      humidity: 65,
      dew_point: 6.71,
      uvi: 1,
      clouds: 62,
      visibility: 10000,
      wind_speed: 6.53,
      wind_deg: 303,
      wind_gust: 10,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'облачно с прояснениями',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632654000,
      temp: 12.9,
      feels_like: 11.94,
      pressure: 1014,
      humidity: 65,
      dew_point: 6.44,
      uvi: 0.84,
      clouds: 70,
      visibility: 10000,
      wind_speed: 6.15,
      wind_deg: 303,
      wind_gust: 10.5,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'облачно с прояснениями',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632657600,
      temp: 12.84,
      feels_like: 11.9,
      pressure: 1014,
      humidity: 66,
      dew_point: 6.55,
      uvi: 0.59,
      clouds: 75,
      visibility: 10000,
      wind_speed: 6.1,
      wind_deg: 303,
      wind_gust: 10.82,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'облачно с прояснениями',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632661200,
      temp: 12.52,
      feels_like: 11.45,
      pressure: 1014,
      humidity: 62,
      dew_point: 5.54,
      uvi: 0.58,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.02,
      wind_deg: 312,
      wind_gust: 11.6,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632664800,
      temp: 12.1,
      feels_like: 11.01,
      pressure: 1014,
      humidity: 63,
      dew_point: 5.24,
      uvi: 0.22,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.01,
      wind_deg: 316,
      wind_gust: 11,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632668400,
      temp: 11.91,
      feels_like: 10.83,
      pressure: 1015,
      humidity: 64,
      dew_point: 5.33,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.85,
      wind_deg: 309,
      wind_gust: 10.71,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632672000,
      temp: 11.61,
      feels_like: 10.58,
      pressure: 1015,
      humidity: 67,
      dew_point: 5.69,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.15,
      wind_deg: 313,
      wind_gust: 10.12,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632675600,
      temp: 10.79,
      feels_like: 9.78,
      pressure: 1015,
      humidity: 71,
      dew_point: 5.64,
      uvi: 0,
      clouds: 91,
      visibility: 10000,
      wind_speed: 4.68,
      wind_deg: 312,
      wind_gust: 9.51,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632679200,
      temp: 11.08,
      feels_like: 9.97,
      pressure: 1015,
      humidity: 66,
      dew_point: 4.9,
      uvi: 0,
      clouds: 88,
      visibility: 10000,
      wind_speed: 4.18,
      wind_deg: 305,
      wind_gust: 9.52,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632682800,
      temp: 11.04,
      feels_like: 10.05,
      pressure: 1015,
      humidity: 71,
      dew_point: 5.84,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.02,
      wind_deg: 310,
      wind_gust: 10.4,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632686400,
      temp: 10.02,
      feels_like: 9.04,
      pressure: 1016,
      humidity: 75,
      dew_point: 5.94,
      uvi: 0,
      clouds: 63,
      visibility: 10000,
      wind_speed: 4.93,
      wind_deg: 312,
      wind_gust: 10.22,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'облачно с прояснениями',
          icon: '04n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632690000,
      temp: 9.32,
      feels_like: 6.79,
      pressure: 1016,
      humidity: 78,
      dew_point: 5.77,
      uvi: 0,
      clouds: 44,
      visibility: 10000,
      wind_speed: 4.86,
      wind_deg: 311,
      wind_gust: 10.31,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'переменная облачность',
          icon: '03n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632693600,
      temp: 8.81,
      feels_like: 6.31,
      pressure: 1016,
      humidity: 81,
      dew_point: 5.77,
      uvi: 0,
      clouds: 35,
      visibility: 10000,
      wind_speed: 4.51,
      wind_deg: 314,
      wind_gust: 10.3,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'переменная облачность',
          icon: '03n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632697200,
      temp: 8.41,
      feels_like: 5.91,
      pressure: 1017,
      humidity: 83,
      dew_point: 5.74,
      uvi: 0,
      clouds: 30,
      visibility: 10000,
      wind_speed: 4.3,
      wind_deg: 315,
      wind_gust: 10.23,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'переменная облачность',
          icon: '03n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632700800,
      temp: 8.05,
      feels_like: 5.48,
      pressure: 1017,
      humidity: 85,
      dew_point: 5.76,
      uvi: 0,
      clouds: 26,
      visibility: 10000,
      wind_speed: 4.25,
      wind_deg: 313,
      wind_gust: 10.22,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'переменная облачность',
          icon: '03n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632704400,
      temp: 7.72,
      feels_like: 5.04,
      pressure: 1017,
      humidity: 88,
      dew_point: 5.84,
      uvi: 0,
      clouds: 13,
      visibility: 10000,
      wind_speed: 4.32,
      wind_deg: 313,
      wind_gust: 10.41,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'небольшая облачность',
          icon: '02n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632708000,
      temp: 7.4,
      feels_like: 4.7,
      pressure: 1017,
      humidity: 89,
      dew_point: 5.74,
      uvi: 0,
      clouds: 22,
      visibility: 10000,
      wind_speed: 4.22,
      wind_deg: 315,
      wind_gust: 10.31,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'небольшая облачность',
          icon: '02n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632711600,
      temp: 7.12,
      feels_like: 4.31,
      pressure: 1018,
      humidity: 90,
      dew_point: 5.64,
      uvi: 0,
      clouds: 24,
      visibility: 10000,
      wind_speed: 4.31,
      wind_deg: 325,
      wind_gust: 10.53,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'небольшая облачность',
          icon: '02n'
        }
      ],
      pop: 0
    },
    {
      dt: 1632715200,
      temp: 7.22,
      feels_like: 4.51,
      pressure: 1018,
      humidity: 90,
      dew_point: 5.64,
      uvi: 0,
      clouds: 31,
      visibility: 10000,
      wind_speed: 4.15,
      wind_deg: 328,
      wind_gust: 10.4,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'переменная облачность',
          icon: '03d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632718800,
      temp: 8.17,
      feels_like: 5.58,
      pressure: 1018,
      humidity: 85,
      dew_point: 5.77,
      uvi: 0.26,
      clouds: 45,
      visibility: 10000,
      wind_speed: 4.36,
      wind_deg: 331,
      wind_gust: 10.2,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'переменная облачность',
          icon: '03d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632722400,
      temp: 8.92,
      feels_like: 6.45,
      pressure: 1018,
      humidity: 82,
      dew_point: 5.94,
      uvi: 0.75,
      clouds: 54,
      visibility: 10000,
      wind_speed: 4.49,
      wind_deg: 337,
      wind_gust: 10.1,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'облачно с прояснениями',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1632726000,
      temp: 10.67,
      feels_like: 9.7,
      pressure: 1019,
      humidity: 73,
      dew_point: 6.14,
      uvi: 1.2,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.95,
      wind_deg: 347,
      wind_gust: 8.52,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'пасмурно',
          icon: '04d'
        }
      ],
      pop: 0
    }
  ],
  daily: [
    {
      dt: 1632560400,
      sunrise: 1632540345,
      sunset: 1632583656,
      moonrise: 1632590280,
      moonset: 1632556920,
      moon_phase: 0.64,
      temp: {
        day: 10.99,
        min: 8.76,
        max: 13.53,
        night: 11.76,
        eve: 13.1,
        morn: 9.31
      },
      feels_like: {
        day: 10.29,
        night: 11.11,
        eve: 12.16,
        morn: 8.7
      },
      pressure: 1008,
      humidity: 82,
      dew_point: 8.04,
      wind_speed: 5.26,
      wind_deg: 290,
      wind_gust: 9.71,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'облачно с прояснениями',
          icon: '04d'
        }
      ],
      clouds: 75,
      pop: 0.36,
      uvi: 2.3
    },
    {
      dt: 1632646800,
      sunrise: 1632626835,
      sunset: 1632669923,
      moonrise: 1632678180,
      moonset: 1632647400,
      moon_phase: 0.67,
      temp: {
        day: 13.27,
        min: 10.02,
        max: 15.23,
        night: 10.02,
        eve: 11.91,
        morn: 12.49
      },
      feels_like: {
        day: 12.48,
        night: 9.04,
        eve: 10.83,
        morn: 12.12
      },
      pressure: 1013,
      humidity: 70,
      dew_point: 7.96,
      wind_speed: 7.07,
      wind_deg: 314,
      wind_gust: 12.6,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'небольшой дождь',
          icon: '10d'
        }
      ],
      clouds: 49,
      pop: 0.32,
      rain: 0.45,
      uvi: 1.67
    },
    {
      dt: 1632733200,
      sunrise: 1632713325,
      sunset: 1632756190,
      moonrise: 1632766500,
      moonset: 1632737820,
      moon_phase: 0.7,
      temp: {
        day: 11.85,
        min: 7.12,
        max: 14.33,
        night: 9.77,
        eve: 12.83,
        morn: 7.12
      },
      feels_like: {
        day: 10.81,
        night: 8.16,
        eve: 11.87,
        morn: 4.31
      },
      pressure: 1019,
      humidity: 66,
      dew_point: 5.85,
      wind_speed: 5.06,
      wind_deg: 8,
      wind_gust: 10.53,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'небольшой дождь',
          icon: '10d'
        }
      ],
      clouds: 100,
      pop: 0.36,
      rain: 0.13,
      uvi: 2.21
    },
    {
      dt: 1632819600,
      sunrise: 1632799816,
      sunset: 1632842458,
      moonrise: 1632855300,
      moonset: 1632827880,
      moon_phase: 0.73,
      temp: {
        day: 12.42,
        min: 8.32,
        max: 13.36,
        night: 10.61,
        eve: 11.55,
        morn: 8.38
      },
      feels_like: {
        day: 11.31,
        night: 9.58,
        eve: 10.51,
        morn: 6.98
      },
      pressure: 1026,
      humidity: 61,
      dew_point: 5.24,
      wind_speed: 4.12,
      wind_deg: 42,
      wind_gust: 7.3,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'небольшой дождь',
          icon: '10d'
        }
      ],
      clouds: 100,
      pop: 0.2,
      rain: 0.31,
      uvi: 1.17
    },
    {
      dt: 1632906000,
      sunrise: 1632886306,
      sunset: 1632928726,
      moonrise: 1632944760,
      moonset: 1632917580,
      moon_phase: 0.75,
      temp: {
        day: 10.66,
        min: 6.53,
        max: 12.85,
        night: 9.22,
        eve: 11.86,
        morn: 6.53
      },
      feels_like: {
        day: 9.48,
        night: 7.81,
        eve: 10.35,
        morn: 4.29
      },
      pressure: 1032,
      humidity: 65,
      dew_point: 4.45,
      wind_speed: 4.08,
      wind_deg: 63,
      wind_gust: 7.03,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'небольшой дождь',
          icon: '10d'
        }
      ],
      clouds: 98,
      pop: 0.2,
      rain: 0.13,
      uvi: 2.61
    },
    {
      dt: 1632992400,
      sunrise: 1632972797,
      sunset: 1633014994,
      moonrise: 1633034880,
      moonset: 1633006680,
      moon_phase: 0.79,
      temp: {
        day: 12.39,
        min: 5.74,
        max: 14.22,
        night: 10.01,
        eve: 12.58,
        morn: 5.74
      },
      feels_like: {
        day: 10.57,
        night: 8.16,
        eve: 10.81,
        morn: 3.66
      },
      pressure: 1034,
      humidity: 34,
      dew_point: -2.76,
      wind_speed: 3.92,
      wind_deg: 92,
      wind_gust: 8.12,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'небольшая облачность',
          icon: '02d'
        }
      ],
      clouds: 14,
      pop: 0,
      uvi: 3
    },
    {
      dt: 1633078800,
      sunrise: 1633059288,
      sunset: 1633101262,
      moonrise: 0,
      moonset: 1633095300,
      moon_phase: 0.82,
      temp: {
        day: 13.27,
        min: 6.39,
        max: 14.94,
        night: 10.63,
        eve: 12.9,
        morn: 6.39
      },
      feels_like: {
        day: 11.44,
        night: 8.69,
        eve: 11.03,
        morn: 4.39
      },
      pressure: 1029,
      humidity: 30,
      dew_point: -3.96,
      wind_speed: 4.24,
      wind_deg: 101,
      wind_gust: 7.3,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'переменная облачность',
          icon: '03d'
        }
      ],
      clouds: 32,
      pop: 0,
      uvi: 3
    },
    {
      dt: 1633165200,
      sunrise: 1633145780,
      sunset: 1633187531,
      moonrise: 1633125420,
      moonset: 1633183440,
      moon_phase: 0.85,
      temp: {
        day: 13.52,
        min: 7.32,
        max: 15.25,
        night: 11.38,
        eve: 13.31,
        morn: 7.32
      },
      feels_like: {
        day: 11.84,
        night: 9.59,
        eve: 11.58,
        morn: 6.6
      },
      pressure: 1025,
      humidity: 35,
      dew_point: -1.56,
      wind_speed: 2.28,
      wind_deg: 78,
      wind_gust: 5,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'ясно',
          icon: '01d'
        }
      ],
      clouds: 6,
      pop: 0,
      uvi: 3
    }
  ]
}

export type OneCall = typeof oneCall

export const LOCALSTORAGE_DATA_NAME = 'NewCitys'

export const KEY = '4276bdd223155b7e5bdf58f8ea7014c9'
