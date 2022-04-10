module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f1b237d0bfa776208204840bfecc6e6c'),
  },
});
