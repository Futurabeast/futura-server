type DeviceType = 'FuturaFaceTracker' | 'FuturaControllers';

interface IDevice {
  type: DeviceType;
  id: string;
  ip: string;
}

interface IBlendshape {
  keys: number[];
  record: string[];
  recordExists: boolean;
}

interface IDataset {
  blendshapes: { [key: string]: IBlendshape };
}
