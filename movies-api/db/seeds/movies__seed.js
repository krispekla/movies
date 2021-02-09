exports.seed = (knex, Promise) => {
  return knex('movies')
    .del()
    .then(() => {
      return knex('movies').insert({
        title: 'Star Trek: Discovery',
        genre: 'Sci-Fi',
        info:
          'Ten years before Kirk, Spock, and the Enterprise, the USS Discovery discovers new worlds and lifeforms as one Starfleet officer learns to understand all things alien.',
        rating: 7,
        rated: 'G',
        img: 'https://drive.google.com/uc?export=view&id=1Vv4WV9bgn-NZSF2FP589xwbTFfI7b0IV'
      });
    })
    .then(() => {
      return knex('movies').insert({
        title: 'Narcos',
        genre: 'Drama',
        info:
          'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.',
        rating: 9,
        rated: 'R',
        img: 'https://drive.google.com/uc?export=view&id=13aIBCKUyjaOWodXdLKIoreIwB1DiFxJH'
      });
    })
    .then(() => {
      return knex('movies').insert({
        title: 'Suits',
        genre: 'Drama',
        info:
          'On the run from a drug deal gone bad, brilliant college dropout Mike Ross, finds himself working with Harvey Specter, one of New York Citys best lawyers.',
        rating: 8,
        rated: 'PG',
        img: 'https://drive.google.com/uc?export=view&id=1_KWpRY-cVfxds1x5TBnY29clmyLfpIbe'
      });
    })
    .then(() => {
      return knex('movies').insert({
        title: 'Peaky Blinders',
        genre: 'Crime',
        info:
          'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
        rating: 8,
        rated: 'R',
        img: 'https://drive.google.com/uc?export=view&id=1hzItY-LO6zLLSIaBf_ggL_NSmBdvKxpH'
      });
    })
    .then(() => {
      return knex('movies').insert({
        title: 'La casa de papel',
        genre: 'Crime',
        info:
          'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
        rating: 8,
        rated: 'R',
        img: 'https://drive.google.com/uc?export=view&id=11j_qVAheE1c5c-hvkTmOc9QLRiB6td-s'
      });
    })
    .then(() => {
      return knex('movies').insert({
        title: 'House of Cards',
        genre: 'Drama',
        info: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',
        rating: 9,
        rated: 'G',
        img: 'https://drive.google.com/uc?export=view&id=1L4RmXKd--FRV-vq6mXLgja_6D29ltUNS'
      });
    })
    .then(() => {
      return knex('movies').insert({
        title: 'Family guy',
        genre: 'Comedy',
        info: 'In a wacky Rhode Island town, a dysfunctional family strive to cope with everyday life as they are thrown from one crazy scenario to another.',
        rating: 8,
        rated: 'PG-13',
        img: 'https://drive.google.com/uc?export=view&id=1ly3i3leHixKSoqnN6ArR2cxUCgGJkGAD'
      });
    })
    .then(() => {
      return knex('movies').insert({
        title: 'South park',
        genre: 'Comedy',
        info: 'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.',
        rating: 8,
        rated: 'PG-13',
        img: 'https://drive.google.com/uc?export=view&id=1N4S2hifs0eVYoV9ro5v89fhLPvPNjqxx'
      });
    })
    .then(() => {
      return knex('movies').insert({
        title: 'The Godfather',
        genre: 'Drama',
        info: 'An organized crime dynastys aging patriarch transfers control of his clandestine empire to his reluctant son.',
        rating: 9,
        rated: 'PG-13',
        img: 'https://drive.google.com/uc?export=view&id=1ER6B2FXsUL36KA5ele0LKWb9XJ0gblPE'
      });
    })
    .then(() => {
      return knex('movies').insert({
        title: 'Breaking Bad',
        genre: 'Crime',
        info:
          'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his familys future.',
        rating: 10,
        rated: 'R',
        img: 'https://drive.google.com/uc?export=view&id=1eNSSQNRrL4l7PnbFnD2-Drxrntql38dj'
      });
    })
    .then(() => {
      return knex('movies').insert({
        title: 'Bling Empire',
        genre: 'Crime',
        info:
          'Follow LAs wildly wealthy Asian and Asian American fun seekers as they go all out with fabulous parties, glamour and drama in this reality series.',
        rating: 5,
        rated: 'PG-13',
        img: 'https://drive.google.com/uc?export=view&id=1n3Pbct3xQKKMHnvqmYhqjSuCtSQazBe9'
      });
    })
    .then(() => {
      return knex('movies').insert({
        title: 'Snowpiercer',
        genre: 'Crime',
        info:
          'Seven years after the world has become a frozen wasteland, the remnants of humanity inhabit a perpetually-moving train that circles the globe, where class warfare, social injustice and the politics of survival play out.',
        rating: 6,
        rated: 'R',
        img: 'https://drive.google.com/uc?export=view&id=13mzUs6xZxF0owLbYzcuN71pYD_U-v8fV'
      });
    });
};
