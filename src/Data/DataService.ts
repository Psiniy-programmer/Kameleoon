import api from "./api";
import {Site, Test} from "./types";
import axios from "axios";

export enum DataServiceErrors {
  ALL_SITES,
  ONE_SITE,
  ALL_TESTS,
  ONE_TEST
}

class DataService {
  async getAllSites(): Promise<Site[] | DataServiceErrors> {
    try {
      const response = await axios.get(api.sites);
      return response.data as Site[];
    } catch (e) {
      console.error(e);
      return DataServiceErrors.ALL_SITES;
    }
  }

  async getOneSite(_id: number): Promise<Site | DataServiceErrors> {
    try {
      const response = await axios.get(api.sites, {
        params: {
          id: _id
        }
      });

      return response.data as Site;
    } catch (e) {
      console.error(e);
      return DataServiceErrors.ONE_SITE
    }
  }

  async getAllTests(): Promise<Test[] | DataServiceErrors> {
    try {
      const response = await axios.get(api.tests);
      return response.data as Test[];
    } catch (e) {
      console.error(e);
      return DataServiceErrors.ALL_TESTS;
    }
  }

  async getOneTest(_id: number): Promise<Test | DataServiceErrors> {
    try {
      const response = await axios.get(api.tests, {
        params: {
          id: _id
        }
      });

      return response.data as Test;
    } catch (e) {
      console.error(e);
      return DataServiceErrors.ONE_TEST
    }
  }
}

export default new DataService();
