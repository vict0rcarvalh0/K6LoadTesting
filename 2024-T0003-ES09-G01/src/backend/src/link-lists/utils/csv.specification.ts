import { Injectable } from '@nestjs/common';
import { Specification } from '../interfaces/specification.interface';

@Injectable()
// Função para verificar se os headers do CSV correspondem aos valores esperados
export class headersMatch implements Specification<string[]> {
  isSatisfiedBy(actual: string[]): boolean {
    const expectedHeaders = ["name", "email", "phone", "company", "cpf", "empresa"];
    if (expectedHeaders.length !== Object.keys(actual).length) {
      return false;
    }

    for (let i = 0; i < expectedHeaders.length; i++) {
      if (expectedHeaders[i] !== actual[i]) {
        return false;
      }
    }
    return true;
  }
 
}

@Injectable()
export class atLeastOneRecord implements Specification<string[]> {
  isSatisfiedBy(actual: string[]): boolean {
    if (Object.keys(actual).length == undefined) {
      return false;
    }
    return true;
    }
  }

  export class csvRecordValid {
    isSatisfiedBy(records): boolean {
      let errors = []; 
      for (let i = 0; i < Object.keys(records).length; i++) {
        const record = records[i];
    
      if (!/^[a-zA-Z\s]+$/.test(record.name)) {
        errors.push(`Campo 'name' inválido na linha ${i + 2}`);
        return false;
      }
      else if (!record.email.includes('@')) {
        errors.push(`Campo 'email' inválido na linha ${i + 2}`);
        return false;
      }
      else if (!/^[0-9()-]+$/.test(record.phone)) {
        errors.push(`Campo 'phone' inválido na linha ${i + 2}`);
        return false;
      }
    }
    return true;
  }
}
  

