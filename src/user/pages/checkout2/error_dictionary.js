const errorDictionary = {
  2004: 'El número de tarjeta es invalido.',
  2005: 'La fecha de expiración de la tarjeta es anterior a la fecha actual.',
  2006: 'El código de seguridad de la tarjeta (CVV2) no fue proporcionado.',
  2007: 'El número de tarjeta es de prueba, solamente puede usarse en Sandbox.',
  2008: 'La tarjeta no es valida para pago con puntos.',
  2009: 'El código de seguridad de la tarjeta (CVV2) es inválido.',
  2010: 'Autenticación 3D Secure fallida.',
  2011: 'Tipo de tarjeta no soportada.',
  3001: 'La tarjeta fue declinada por el banco.',
  3002: 'La tarjeta ha expirado.',
  3003: 'La tarjeta no tiene fondos suficientes.',
  3004: 'La tarjeta ha sido identificada como una tarjeta robada.',
  3005: 'La tarjeta ha sido rechazada por el sistema antifraude.',
  3006: 'La operación no esta permitida para este cliente o esta transacción.',
  3009: 'La tarjeta fue reportada como perdida.',
  3010: 'El banco ha restringido la tarjeta.',
  3011: 'El banco ha solicitado que la tarjeta sea retenida. Contacte al banco.',
  3012: 'Se requiere solicitar al banco autorización para realizar este pago.',
  3201: 'Comercio no autorizado para procesar pago a meses sin intereses.',
  3203: 'Promoción no valida para este tipo de tarjetas.',
  3204: 'El monto de la transacción es menor al mínimo permitido para la promoción.',
  3205: 'Promoción no permitida.'
}

export default errorDictionary
