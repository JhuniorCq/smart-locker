export const INDICATORS = {
  TEMPERATURE: "TEMPERATURA",
  HUMIDITY: "HUMEDAD",
  SECURITY: "SEGURIDAD",
};

export const SECURITY_VALUES = {
  OPEN: "OPEN",
  CLOSE: "CLOSE",
};

export const RECOMMENDATIONS = [
  {
    id: 1,
    name: "TEMPERATURA ALTA",
    recommendations: [
      "Coloque el locker en un lugar más fresco y bien ventilado.",
      "Evite exponer el locker a la luz solar directa.",
    ],
  },
  {
    id: 2,
    name: "TEMPERATURA BAJA",
    recommendations: [
      "Mantenga el locker alejado de corrientes de aire frío.",
      "Asegúrese de que el lugar esté a temperatura ambiente.",
    ],
  },
  {
    id: 3,
    name: "HUMEDAD ALTA",
    recommendations: [
      "Coloque un desecante dentro del locker para absorber humedad.",
      "Evite almacenar objetos sensibles a la humedad.",
    ],
  },
  {
    id: 4,
    name: "HUMEDAD BAJA",
    recommendations: [
      "Mantenga el locker alejado de corrientes de aire frío.",
      "Asegúrese de que el lugar esté a temperatura ambiente.",
    ],
  },
  {
    id: 5,
    name: "INTRUSIÓN DETECTADA",
    recommendations: [
      "Revise el contenido del locker de inmediato.",
      "Considere cambiar la ubicación del locker.",
    ],
  },
  {
    id: 6,
    name: "ESTADO SEGURO",
    recommendations: [
      "No es necesario realizar ninguna acción.",
      "Asegúrese de mantener el locker en un entorno estable.",
    ],
  },
];

export const RECORDED_ALERTS = [
  {
    id: 1,
    name: "TEMPERATURA ALTA",
    date: "04/12/2024",
    time: "20:08",
    temperature: 25,
    humidity: 45,
    security: SECURITY_VALUES.CLOSE,
    idRecommendation: 1,
  },
  {
    id: 2,
    name: "INTRUSIÓN DETECTADA",
    date: "04/12/2024",
    time: "20:08",
    temperature: 25,
    humidity: 45,
    security: SECURITY_VALUES.OPEN,
    idRecommendation: 2,
  },
  {
    id: 3,
    name: "TEMPERATURA BAJA",
    date: "03/12/2024",
    time: "20:08",
    temperature: 25,
    humidity: 45,
    security: SECURITY_VALUES.CLOSE,
    idRecommendation: 2,
  },
  {
    id: 4,
    name: "TEMPERATURA ALTA",
    date: "03/12/2024",
    time: "20:08",
    temperature: 25,
    humidity: 45,
    security: SECURITY_VALUES.CLOSE,
    idRecommendation: 1,
  },
  {
    id: 5,
    name: "HUMEDAD ALTA",
    date: "03/12/2024",
    time: "20:08",
    temperature: 25,
    humidity: 45,
    security: SECURITY_VALUES.CLOSE,
    idRecommendation: 3,
  },
  {
    id: 6,
    name: "HUMEDAD BAJA",
    date: "02/12/2024",
    time: "20:08",
    temperature: 25,
    humidity: 45,
    security: SECURITY_VALUES.CLOSE,
    idRecommendation: 4,
  },
  {
    id: 7,
    name: "TEMPERATURA ALTA",
    date: "02/12/2024",
    time: "20:08",
    temperature: 25,
    humidity: 45,
    security: SECURITY_VALUES.CLOSE,
    idRecommendation: 1,
  },
  {
    id: 8,
    name: "TEMPERATURA ALTA",
    date: "02/12/2024",
    time: "20:08",
    temperature: 25,
    humidity: 45,
    security: SECURITY_VALUES.CLOSE,
    idRecommendation: 1,
  },
  {
    id: 9,
    name: "TEMPERATURA ALTA",
    date: "02/12/2024",
    time: "20:08",
    temperature: 25,
    humidity: 45,
    security: SECURITY_VALUES.CLOSE,
    idRecommendation: 1,
  },
];
