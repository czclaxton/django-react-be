# Generated by Django 3.0.2 on 2020-01-10 01:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0004_character_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='character',
            name='password',
        ),
        migrations.RemoveField(
            model_name='character',
            name='username',
        ),
    ]
