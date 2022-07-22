import { ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class ForbiddenExceptionService {
    public async trowForbidddenExpection(message? :string) {
      return new ForbiddenException(message)
    }
}
