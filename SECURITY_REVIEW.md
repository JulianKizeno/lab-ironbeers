# Revisión de seguridad — 2026-10-24

Repositorio: `JulianKizeno/lab-ironbeers`. Rama: `security/review-2026-10-24`.

## Correcciones

- Remove the unmaintained vulnerable Punk API wrapper and its Axios dependency; use bounded native fetch requests

## Auditoría npm después de los cambios

| Proyecto | Críticas | Altas | Moderadas | Bajas | Total |
|---|---:|---:|---:|---:|---:|
| `starter-code` | 0 | 0 | 0 | 0 | 0 |

## Verificación

- Pruebas de regresión de seguridad (`starter-code/security-tests`): correctas.

## Límites y configuración

- La auditoría cubre el árbol npm resuelto, no demuestra ausencia de vulnerabilidades de lógica, infraestructura o servicios externos. No se ha desplegado ni fusionado este cambio.
- La disponibilidad del proveedor externo Punk API no se ha comprobado; el adaptador conserva las rutas anteriores, valida errores y limita la duración de las peticiones.
