import {
  accessToken,
  expiredAccessToken,
  dropboxPath,
  incorrectDropboxPath,
  fileName,
} from "./test-constants";
import { DropboxRequests } from "../requests/dropbox-requests";

describe("dropbox testing:", () => {
  let dropbox: DropboxRequests;

  beforeAll(() => {
    dropbox = new DropboxRequests(accessToken, expiredAccessToken);
  }, 3000);

  it("upload file", (done) => {
    dropbox.uploadFile(dropboxPath, fileName, done);
  });

  it("upload file with expired token", (done) => {
    dropbox.uploadFileExpiredToken(dropboxPath, fileName, done);
  });

  it("get file metadata", (done) => {
    dropbox.getFileMetadata(dropboxPath, fileName, done);
  });

  it("get missing file metadata", (done) => {
    dropbox.getMissingFileMetadata(incorrectDropboxPath, fileName, done);
  });

  it("delete file", (done) => {
    dropbox.deleteFile(dropboxPath, fileName, done);
  });

  it("delete missing file", (done) => {
    dropbox.deleteMissingFile(incorrectDropboxPath, fileName, done);
  });
});
