import logger from 'pino';

const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time": "${new Date(new Date().toUTCString())}`,
});

export default log;
