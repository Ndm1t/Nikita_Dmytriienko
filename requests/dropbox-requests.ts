import dropboxV2Api from "dropbox-v2-api";
import fs from "fs";
import { dict } from "./models";

export class DropboxRequests {
  dropbox: typeof dropboxV2Api;
  expiredDropbox: typeof dropboxV2Api;
  constructor(validToken: string, invalidToken: string) {
    this.dropbox = dropboxV2Api.authenticate({
      token: validToken,
    });
    this.expiredDropbox = dropboxV2Api.authenticate({
      token: invalidToken,
    });
  }

  uploadFile(dropboxPath: string, fileName: string, done: DoneFn) {
    this.dropbox(
      {
        resource: "files/upload",
        parameters: {
          path: dropboxPath,
        },
        readStream: fs.createReadStream("test-files/test.txt"),
      },
      (err: dict, result: dict, response: dict) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(fileName);
        done();
      }
    );
  }

  uploadFileExpiredToken(dropboxPath: string, fileName: string, done: DoneFn) {
    this.expiredDropbox(
      {
        resource: "files/upload",
        parameters: {
          path: dropboxPath,
        },
        readStream: fs.createReadStream("test-files/test.txt"),
      },
      (err: dict, result: dict, response: dict) => {
        expect(response.statusCode).toBe(401);
        expect(response.body.error_summary).toContain("expired_access_token/");
        done();
      }
    );
  }

  getFileMetadata(dropboxPath: string, fileName: string, done: DoneFn) {
    this.dropbox(
      {
        resource: "files/get_metadata",
        parameters: {
          path: dropboxPath,
          include_media_info: false,
        },
      },
      (err: dict, result: dict, response: dict) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(fileName);
        done();
      }
    );
  }

  getMissingFileMetadata(
    incorrectDropboxPath: string,
    fileName: string,
    done: DoneFn
  ) {
    this.dropbox(
      {
        resource: "files/get_metadata",
        parameters: {
          path: incorrectDropboxPath,
          include_media_info: false,
        },
      },
      (err: dict, result: dict, response: dict) => {
        expect(response.statusCode).toBe(409);
        expect(response.body.error_summary).toContain("path/not_found/");
        done();
      }
    );
  }

  deleteFile(dropboxPath: string, fileName: string, done: DoneFn) {
    this.dropbox(
      {
        resource: "files/delete_v2",
        parameters: {
          path: dropboxPath,
        },
      },
      (err: dict, result: dict, response: dict) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.metadata.name).toBe(fileName);
        done();
      }
    );
  }

  deleteMissingFile(
    incorrectDropboxPath: string,
    fileName: string,
    done: DoneFn
  ) {
    this.dropbox(
      {
        resource: "files/delete_v2",
        parameters: {
          path: incorrectDropboxPath,
        },
      },
      (err: dict, result: dict, response: dict) => {
        expect(response.statusCode).toBe(409);
        expect(response.body.error_summary).toContain("path_lookup/not_found/");
        done();
      }
    );
  }
}
