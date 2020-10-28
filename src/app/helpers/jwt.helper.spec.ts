import {parseJwt} from './jwt.helper';

describe('Jwt Helper', () => {

  const dummyToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    'eyJlbWFpbCI6ImFiY0Bhc3RwLm1lIiwiaWF0IjoxNjAzODM1MzU2LCJleHAiOjE2MDM4Mzg5NTYsInN1YiI6IjIifQ.' +
    'JttmtAeRoVSG_s9n9EdH4sPz1Bd6dN3ysPtptNsvdWo';

  const dummyPayload = {
    email: 'abc@astp.me',
    iat: 1603835356,
    exp: 1603838956,
    sub: '2'
  };

  it('should test parseJwt', () => {
    const payload = parseJwt(dummyToken);
    expect(payload).toEqual(jasmine.objectContaining(dummyPayload));
  });

  // it('should test isJwtExpired', () => {
  //   let dummyExp = Date.now() + 60 * 60; // + 1 hour
  //   expect(isJwtExpired(dummyExp)).toBeFalse();
  //
  //   dummyExp = Date.now() - 60 * 60; // - 1 hour
  //   expect(isJwtExpired(dummyExp)).toBeTrue();
  // });

});
