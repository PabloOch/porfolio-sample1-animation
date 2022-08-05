import App from './App';  
module.exports = {
  webpack: config => {
    config.resolve.alias['@material-ui/styled-engine'] = '@material-ui/styled-engine-sc'
    return config
  },
}