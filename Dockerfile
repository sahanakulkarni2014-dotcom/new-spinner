# ─────────────────────────────────────────────
#  Stage: Serve static files with Nginx
# ─────────────────────────────────────────────
FROM nginx:alpine

# Remove the default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy our static files into the nginx serve directory
COPY index.html  /usr/share/nginx/html/
COPY style.css   /usr/share/nginx/html/
COPY script.js   /usr/share/nginx/html/

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx in the foreground (required for Docker)
CMD ["nginx", "-g", "daemon off;"]
