export class CreatePoolDto {
    // readonly đảm bảo tính bất biến của dữ liệu
    readonly poolId: number;
    poolValue: Array<number>;
  }

