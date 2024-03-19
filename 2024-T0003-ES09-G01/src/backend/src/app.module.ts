import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinkListsModule } from './link-lists/link-lists.module';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';

@Module({
  imports: [LinkListsModule],
  controllers: [AppController],
  providers: [AppService, RabbitMQService],
})
export class AppModule {}
