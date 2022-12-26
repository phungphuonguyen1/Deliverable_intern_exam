import { Module } from '@nestjs/common';
import { PoolController } from './pool.controller';
import { PoolService } from './pool.services';

@Module({ 
  controllers: [PoolController],
  providers: [PoolService] 
})
export class PoolModule {}