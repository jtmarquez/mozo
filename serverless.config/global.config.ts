const getStage = () => {
  let stage = 'local';
  const stageIndex = process.argv.indexOf('--stage');
  if (stageIndex > -1) {
    stage = process.argv[stageIndex + 1];
  }
  return stage;
};

const getProvisionedConcurrency = () => {
  switch (getStage()) {
    case 'prod':
      return 1;
    default:
      return undefined;
  }
};

type Region =
  | 'us-east-1'
  | 'us-east-2'
  | 'us-gov-east-1'
  | 'us-gov-west-1'
  | 'us-west-1'
  | 'us-west-2'
  | 'af-south-1'
  | 'ap-east-1'
  | 'ap-northeast-1'
  | 'ap-northeast-2'
  | 'ap-northeast-3'
  | 'ap-south-1'
  | 'ap-southeast-1'
  | 'ap-southeast-2'
  | 'ca-central-1'
  | 'cn-north-1'
  | 'cn-northwest-1'
  | 'eu-central-1'
  | 'eu-north-1'
  | 'eu-south-1'
  | 'eu-west-1'
  | 'eu-west-2'
  | 'eu-west-3'
  | 'me-south-1'
  | 'sa-east-1';

const getRegion = (): Region => {
  const region: Region = 'us-east-1';
  const regionIndex = process.argv.indexOf('--region');
  if (regionIndex > -1) {
    const provisionedRegion = process.argv[regionIndex + 1];
    if (provisionedRegion as Region) {
      return provisionedRegion as Region;
    }
  }
  return region;
};

export const region = getRegion();
export const provisionedConcurrency = getProvisionedConcurrency();
