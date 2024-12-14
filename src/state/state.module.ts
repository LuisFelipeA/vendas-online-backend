import { Module } from '@nestjs/common';
import { StateController } from './state.controller';
import { StateEntity } from './entities/state.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateService } from './state.service';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  controllers: [StateController],
  providers: [StateService]
})
export class StateModule {}
