const { DataTypes } = require('sequelize');
const { sequelize } = require('../src/db'); 
const Country = require('../src/models/Country'); 
const request = require('supertest');

describe('Country Model', () => {
  beforeAll(async () => {
    await sequelize.sync(); 
  });

  
  afterAll(async () => {
    await sequelize.close(); 
  });

  it('should create a valid Country instance', async () => {
    const country = await Country.create({
      id: 'ARG',
      name: 'Argentina',
      continents: 'South America',
      capital: 'Buenos Aires',
      area: 2780400.0,
      population: 45195777,
    });

    expect(country).toBeDefined();
    expect(country.id).toBe('ARG');
    expect(country.name).toBe('Argentina');
    expect(country.continents).toBe('South America');
    expect(country.capital).toBe('Buenos Aires');
    expect(country.area).toBe(2780400.0);
    expect(country.population).toBe(45195777);
  });

  it('should not create a Country instance with missing required fields', async () => {
    try {
      await Country.create({
       
      });
     
      fail('Should not have reached here');
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
    }
  });})
