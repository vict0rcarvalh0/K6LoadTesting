import { Module } from '@nestjs/common';
import { LinkListsService } from './link-lists.service';
import { LinkListsController } from './link-lists.controller';
import { PrismaService } from '../prisma.service'; 
import { MulterModule } from '@nestjs/platform-express';
import { RabbitMQService } from 'src/rabbitmq/rabbitmq.service';
import {headersMatch, atLeastOneRecord, csvRecordValid} from './utils/csv.specification';


@Module({
  imports: [MulterModule.register({
    dest: './dist/temp/file-uploads'
  })],
  controllers: [LinkListsController],
  providers: [LinkListsService, PrismaService, headersMatch, atLeastOneRecord, csvRecordValid, RabbitMQService],
  exports: [PrismaService],
})
export class LinkListsModule {}
