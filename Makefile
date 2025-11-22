build:
	sudo docker rm -f PamaUI
	sudo docker build -f docker/Dockerfile -t pama-ui/prod .
	sudo docker run -d --restart=always --name=PamaUI -p 8401:3000 pama-ui/prod

build:
	cd pama && npm run build
pm2:
	PORT=8401 pm2 start npm --name "PamaUI" -- start

pm2-stop:
	pm2 stop nhistore

pm2-delete:
	pm2 delete nhistore

pm2-restart:
	pm2 restart nhistore