const MASK_PART = [/\d/, /\d/, /\d/, /\d/];

// mask number length 12 - 19
const maskTypes = {
  card: [...MASK_PART, ' ', ...MASK_PART, ' ', ...MASK_PART, ' ', ...MASK_PART, /\d/, ' ', /\d/, /\d/],
  expiration: [/\d/, /\d/, '/', /\d/, /\d/],
  code: [/\d/, /\d/, /\d/, /\d/]
};

export default maskTypes;
