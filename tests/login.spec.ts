import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter/playwright';

test(qase(20,'Inicio de sesion exitoso'), async ({ page }) => {
  // Al no poner qase.id(), Qase lo creará como un caso NUEVO.
  
  // Le decimos a Qase en qué carpeta (Suite) debe guardarlo:
 // qase.suite('SauceDemo');
  
  // Agregamos metadatos adicionales (opcional)
  qase.title('Registro exitoso de usuario');
  qase.fields({ severity: 'critical', layer: 'e2e' });

  await test.step(qase.step('Paso 1: Ir a la página de registro', 'La página de registro debe cargarse', undefined), async () => {
    await page.goto('https://www.saucedemo.com');
  });

  await test.step(qase.step('Paso 2: Completar el formulario', 'Los campos deben estar visibles y habilitados', undefined), async () => {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
  });

  await test.step(qase.step('Paso 3: Enviar formulario', 'El formulario debe enviarse correctamente', undefined), async () => {
    await page.locator('[data-test="login-button"]').click();
  });

  await test.step(qase.step('Paso 4: Validar cuenta creada', 'Debe mostrarse mensaje de éxito', undefined), async () => {
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
  });
});