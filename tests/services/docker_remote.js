require('../tests');
var DockerRemote = require(__services + 'docker_remote');

describe('DockerRemote', function() {
  var containerID;
  var dockerRemoteMock;

  beforeEach(function() {
    dockerRemoteMock = sinon.mock(DockerRemote);
  });

  describe('.stats()', function() {
    beforeEach(function() {
      containerID = '999f3c428c18';
    });

    it('returns stats from a container', function() {
      dockerRemoteMock.expects('stats').withArgs(containerID).once();
      DockerRemote.stats(containerID);
      dockerRemoteMock.verify();
    });
  });

  describe('.containers()', function() {
    it('returns list of containers', function() {
      dockerRemoteMock.expects('containers').once();
      DockerRemote.containers();
      dockerRemoteMock.verify();
    });
  });
});
