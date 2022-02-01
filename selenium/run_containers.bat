@echo off
title %~dpnx0
	docker-compose up --remove-orphans
pause
