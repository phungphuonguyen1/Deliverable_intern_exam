import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoolController } from './pool/pool.controller';
import { PoolModule } from './pool/pool.module';
import { PoolService } from './pool/pool.services';

@Module({
  imports: [PoolModule],
  controllers: [AppController,PoolController],
  providers: [AppService,PoolService],
})
export class AppModule {}
